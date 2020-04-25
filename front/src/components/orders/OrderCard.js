import React from 'react';
import Card from 'react-bootstrap/Card';
// text
import BodyText from '../text/BodyText';
// styles
import cardStyles from '../../assets/styles/cards.module.css'; // Import css modules stylesheet as styles
import textStyles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles

const EACardBlue = ({title, content}) => {
    return (
        <Card className={cardStyles.card}>
        <Card.Body>
            <Card.Title>
                <h6 className={textStyles.bodyTextBold}>
                    {title}
                </h6>
            </Card.Title>
            <Card.Text>
                <p className={textStyles.bodyText}>
                    {content}
                </p>
                <BodyText
                    content={content}
                ></BodyText>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default EACardBlue;