import description from "./description_text"
export default function descriptions(props){
    const currentDescriptions = props.currentDescription;
    const currentDescription = description.find(
			current => current.id === currentDescriptions
		)
    if (!currentDescription) {
        return <p>Description not found</p>
    }
    return (
        <>
            <p>
                {currentDescription.description}
            </p>
        </>
    )
}