const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 15,
        width: '80%',
        backgroundColor: '#122a4b',
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 40,
        border: '1px solid #FEB700',
        opacity: 0.8,
        alignSelf: 'center',
    };

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
        </div>
    );
};

export default ProgressBar;
