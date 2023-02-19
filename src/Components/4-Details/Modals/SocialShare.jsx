import CopyToClipboard from "react-copy-to-clipboard"
import { Button, Modal } from "react-daisyui"
import { TbCopy } from "react-icons/tb";
import { BsShare } from "react-icons/bs"
import { useEffect, useState } from "react";
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton, TwitterShareButton, EmailShareButton } from "react-share";
import FBIcon from "../../../assets/FBIcon.svg";
import LIIcon from "../../../assets/LIIcon.svg";
import WPIcon from "../../../assets/WPIcon.svg";
import TWIcon from "../../../assets/TWIcon.svg";
import MailIcon from "../../../assets/MailIcon.svg";



// modal for sharing flashcard to social media applications
// it will receive props from parent component 
export const SocialShare = ({ showShare, closeShare }) => {
    const [copyLink, setCopyLink] = useState(false);

    // display copied messege for 2 seconds using setTimeout function 
    useEffect(() => {
        copyLink &&
            setTimeout(() => {
                setCopyLink(!copyLink);
            }, 2000)
    }, [copyLink])
    return (

        <div>
            <Modal open={showShare} onClickBackdrop={closeShare}>
                <Button size="sm" shape="circle"
                    className="absolute right-2 top-2 bg-white border-none rounded-full"
                    onClick={() => closeShare()}
                    title="Cancel"
                >❌</Button>

                <Modal.Header className="font-bold">Share</Modal.Header>
                <Modal.Body>
                    <div className="m-5 flex flex-col">
                        <div className="flex items-center space-x-3 ml-5">
                            <p className=" flex items-center flex-1  text-slate-500 border-slate-300 rounded-md border-dashed border-2 p-2 text-xs">Link : <span className="font-semibold  mx-2  text-xs  text-black">https://github.com/panku-chavan/</span></p>
                            <CopyToClipboard text={"https://github.com/panku-chavan"} onCopy={() => { setCopyLink(!copyLink) }}>
                                <TbCopy className="scale-x-[-1] text-slate-600 cursor-pointer text-xl "></TbCopy>
                            </CopyToClipboard>
                            <BsShare className=" cursor-pointer text-xl text-slate-600 " />
                        </div>
                        <h2 className=" ml-11 p-2 h-5 text-sm  font-semibold">{copyLink && "Copied to clipboard..."}</h2>
                        <div className="mt-6 flex items-center space-x-10 justify-center">
                            <FacebookShareButton url="https://www.facebook.com/">
                                <img src={FBIcon} alt="Facebook" className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                            </FacebookShareButton>
                            <LinkedinShareButton url="https://www.linkedin.com/">
                                <img src={LIIcon} alt="Linkedin" className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                            </LinkedinShareButton>
                            <WhatsappShareButton url="https://web.whatsapp.com/">
                                <img src={WPIcon} alt="Whatsapp" className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                            </WhatsappShareButton>
                            <TwitterShareButton url="https://twitter.com/">
                                <img src={TWIcon} alt="Twitter" className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                            </TwitterShareButton>
                            <EmailShareButton url="https://gmail.com/">
                                <img src={MailIcon} alt="Mail" className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                            </EmailShareButton>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}