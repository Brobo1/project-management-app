export function ProjectDisplaySidebar({text, onClick, ...props}) {
  return (
	<li
	  className={
		"bg-stone-900 " +
		"hover:bg-stone-700 " +
		"text-xl " +
		"p-2 " +
		"rounded " +
		"text-stone-400 "}
	  onClick={onClick}
	  {...props}
	>
	  {text}
	</li>
  )
}