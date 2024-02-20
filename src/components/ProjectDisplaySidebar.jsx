export function ProjectDisplaySidebar({text, ...props}) {
  return (
	<li
	  className={
		"bg-stone-500 " +
		"my-2 " +
		"hover:bg-stone-300 " +
		"text-lg " +
		"p-2 " +
		"py-1 " +
		"rounded " +
		" "}
	  {...props}
	>
	  {text}
	</li>
  )
}