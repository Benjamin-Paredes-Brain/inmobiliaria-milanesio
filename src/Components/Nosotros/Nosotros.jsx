export const Nosotros = () => {
    const nosotrosData = [
        {
            title: '¿Quiénes Somos?',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iste veniam non, nesciunt molestias magnam vero commodi, dolorem consequatur aspernatur quisquam minima sequi perferendis repellendus illum, suscipit voluptate fuga est.',
        },
        {
            title: 'Misión',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus earum voluptatibus minus harum dolor ut autem praesentium ipsa iste natus tempora deleniti iusto rerum, laboriosam architecto reiciendis aperiam ad.',
        },
        {
            title: 'Visión',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus earum voluptatibus minus harum dolor ut autem praesentium ipsa iste natus tempora deleniti iusto rerum, laboriosam architecto reiciendis aperiam ad.',
        },
        {
            title: 'Valores',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus earum voluptatibus minus harum dolor ut autem praesentium ipsa iste natus tempora deleniti iusto rerum, laboriosam architecto reiciendis aperiam ad.',
        },
    ];

    return (
        <>
            <div className="nosotros_banner">
                <h1 className="nosotros_txt">Nosotros</h1>
            </div>

            <div className="nosotros_container">
                <div className="nosotros_card">
                    {nosotrosData.map((item, index) => (
                        <div key={index} className="nosotros_card_container">
                            <p className="nosotros_card_title">{item.title}</p>
                            <p className="nosotros_card_txt">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
