import {forwardRef} from "react";

const Input = forwardRef(
  function Input({label, type, ...props}, ref) {
	
	let ele;
	
	const styles = "block w-full text-xl p-2  text-stone-500 border border-b-2 rounded-t-md rounded-b-sm bg-stone-100  focus:outline-none focus:border-b-stone-400 ";
	
	if (type === "text") {
	  ele = <input
		ref={ref}
		className={styles}
	  />
	} else if (type === "textarea") {
	  ele = <textarea
		ref={ref}
		rows={3}
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
			className="block mb-2 text-2xl font-medium text-gray-900 text-start "
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