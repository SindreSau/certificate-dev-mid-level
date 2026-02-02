import React from 'react';

export const Button = (props) => {
    const [clicked, setClicked] = React.useState(false);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'button',
            {
                className: 'custom-button',
                onClick: () => {
                    setClicked(true);
                },
            },
            props.children,
        ),
        clicked && React.createElement('p', null, 'Super duper cool'),
    );
};
