export function Button({children, ...props}) {
  return (
	<button {...props}
			className={
			  "bg-stone-700 " +
			  "hover:bg-stone-400 " +
			  "mt-8 " +
			  "p-2 " +
			  "rounded-md " +
			  "font-semibold " +
			  "text-stone-100 " +
			  ""
			}
	>
	  {children}
	</button>
  )
}