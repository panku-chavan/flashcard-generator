import { Button, Modal } from "react-daisyui"

// Print modal
export const Print = ({ showPrint, closePrint }) => {

    return (

        <div>
            <Modal open={showPrint} onClickBackdrop={closePrint}>
                <Button size="sm" shape="circle"
                    className="absolute right-2 top-2 bg-white border-none "
                    onClick={() => closePrint()}
                    title="Cancel"
                >❌</Button>

                <Modal.Header className="font-bold">Print</Modal.Header>
                <Modal.Body>
                    <div className="m-5 flex flex-col">
                       <h2 className="p-2  ml-11 border-2 rounded-md text-2xl font-extrabold dark:text-slate">Cannot Print Card.</h2>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}