// Hooks
import { useState, useEffect } from "react";

// Router
import { useParams } from "react-router-dom";

// Context
import { get } from "../../Context";

const MapThroughArrayInObject = () => {

    const { id } = useParams();
    const [element, setElement] = useState();

    useEffect(() => {
        get("cases", id).then(respones => setElement(respones));
    }, [id]);

    return (
        <>
            {
                element == null ? <>Loading...</> :
                    <details>
                        <summary><h1 style={{ display: "inline" }}>{element.title}</h1></summary>
                        <h2>Tasks</h2>
                        <hr />
                        <ul>
                            {
                                element.tasks.map(e => (
                                    <li>
                                        {e.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </details>
            }
        </>
    );
}

export default MapThroughArrayInObject;