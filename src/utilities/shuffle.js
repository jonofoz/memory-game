const shuffle = () => {
    const assets = [
        { image: "/css.png" },
        { image: "/html5.png" },
        { image: "/stack.png" },
        { image: "/js.png" },
        { image: "/python.png" },
        { image: "/node.png" },
        { image: "/react.png" },
        { image: "/ts.png" },
    ];

    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))
}

export default shuffle;