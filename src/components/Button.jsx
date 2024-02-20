export function Button({children, styles, ...props}) {
  
  
  return (
	<button {...props}
			className={
			  "bg-stone-800 " +
			  "hover:bg-stone-600 " +
			  "p-2 " +
			  "rounded-md " +
			  "text-stone-200 " +
			  "text-xl"
			}
	>
	  {children}
	</button>
  )
}