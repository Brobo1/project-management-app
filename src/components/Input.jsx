import {forwardRef} from "react";

const Input = forwardRef(
  function Input({label, type, ...props}, ref) {
	
	let ele;
	
	const styles = "block w-full p-2 mb-20 text-gray-900 border border-stone-100 rounded-lg bg-stone-50 text-xs bg-stone-100 border-stone-600";
	
	if (type === "text") {
	  ele = <input
		ref={ref}
		className={styles}
	  />
	} else if (type === "textarea") {
	  ele = <textarea
		ref={ref}
		rows={6}
		className={styles}
	  />
	} else if (type === "date") {
	  ele = <input
		ref={ref}
		type={"date"}
		className={styles}
	  />
	}
	
	return (
	  <>
		<div className={"w-3/4 "}>
		  <label
			htmlFor="small-input"
			className="block mb-2 text-lg font-medium text-gray-900 text-start"
		  >
			{label}
		  </label>
		  
		  {ele}
		</div>
	  </>
	)
  }
);
export {Input};