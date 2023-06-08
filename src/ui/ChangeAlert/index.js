import React from "react";
import { useStorageListener, withStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({sincronize}) {

    const {show, toggleShow} = useStorageListener(sincronize);

    if(show){

        return (

            <div className="AlertBackground">

                <div className="AlertModal">

                    <label> Se detectaron cambios </label>

                    <div className='Alert-buttonContainer'>

                        <button
                        onClick={() => toggleShow(false)}
                        className = 'Alert-button Alert-button-reload'>

                            Volver a cargar la informacion

                        </button>

                    </div>

                </div>

            </div>

        );

    } else {

        return null;

    }

}

export {ChangeAlert};