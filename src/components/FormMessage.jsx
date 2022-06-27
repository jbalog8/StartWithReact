function FormMessage(props) {
    if (!props.visible) {
        return null;
    }
    return <div className="from-message">Successfully Sign In!</div>
}
export default FormMessage;