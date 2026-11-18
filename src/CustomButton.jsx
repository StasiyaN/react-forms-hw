function CustomButton({ ref, children, ...props }) {
    return (
        <button ref={ref} {...props}>
            {children}
        </button>
    )
}

export default CustomButton