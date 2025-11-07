import description from "./description_text"
export default function descriptions(props){
    const currentDescriptions = props.currentDescription;
    const currentDescription = description.find(
			current => current.id === currentDescriptions
		)
    return (
        <>
            <p>
                {currentDescription.description}
            </p>
        </>
    )
}