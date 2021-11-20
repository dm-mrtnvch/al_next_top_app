import {Htag, Tag} from "../components";
import Button from "../components/Button/Button";
import {P} from "../components/P/P";
import {useEffect, useState} from "react";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4)

    return (
        <>
            <Htag tag="h1">текст</Htag>
            <Button appearance={"primary"} arrow={"down"} className="dsfsdfsdf">click me</Button>
            <Button appearance={"ghost"} arrow={"right"}>ghost</Button>
            <P size={"s"}>small</P>
            <P size={"m"}>medium</P>
            <P size={"l"}>big</P>
            <Tag size={"s"} color={"green"}>green</Tag>
            <Tag size={"m"} color={"ghost"}>ghost</Tag>
            <Tag size={"s"} color={"grey"}>grey</Tag>
            <Tag size={"m"} color={"primary"}>primary</Tag>
            <Tag size={"s"} color={"red"}>red</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    );
}

export default withLayout(Home)