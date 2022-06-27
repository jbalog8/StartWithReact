function FormError(props) {
    if (!props.visible) {
        return null;
    }
    return <div className="form-error">Failed to Sign In!</div>
}
export default FormError;