import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { getDiscussionsForUser, getMessagesForDiscussion } from "../api";

//images
import marie from "../assets/img/marie.jpg";

function Discussion() {
  const [listDiscussion, setListDiscussion] = useState([]);
  const [userId, setUserId] = useState("");
  const [discussion, setDiscussion ] = useState([]);
  useEffect(() => {
    const getUserId = async () => {
      const user = localStorage.getItem("user");
      setUserId(JSON.parse(user).id);
    };
    getUserId();
  }, []);

  useEffect(() => {
    getDiscussionsForUser(userId).then((data) => {
      data.forEach((discussion) => {
        getMessagesForDiscussion(discussion.id).then((messages) => {
          discussion.messages = messages;
        });
      });
      console.log(data);
      setListDiscussion(data);
      console.log(data[0]);
      setDiscussion(data[0]);
    });
  }, [userId]);

  return (
    <>
      <Sidebar a4="active" />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Nav titre="Discussion" input="none" />

        {/** Inserons ici le block principale de la discussion  */}
        <div className="container chat">
          <div className="row">
            <div className="row chat-header">
              <div className="col-md-8">
                <div className="row ">
                  <div className="col-md-2">
                    <div className="avatar">
                      <img src={marie} alt="Avatar" className="avatar" />
                    </div>
                  </div>
                  <div className="col-md-8 avatar-nom">
                    <h4>{discussion.user1.id === userId ? discussion.user2.firstName : discussion.user1.firstName} </h4>
                  </div>
                  <div className="col-md-2">
                    {/** ne rien mettre ici exc */}
                  </div>
                </div>

                <div className="row">
                  <div className="topnav">
                    <div className="row bulle-left" style={{ color: "blue" }}>
                      <p style={{ color: "black" }}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis iure sint id aliquid eligendi aliquam fugit eaque.
                        Officia consequuntur hic corporis at accusamus
                        consectetur ex!{" "}
                      </p>
                    </div>
                    <div
                      className="row bulle-right f-rigth"
                      style={{ color: "black" }}
                    >
                      <p style={{ color: "black" }}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit soluta nulla numquam animi et, a eius dolore, harum
                        totam fugiat iusto esse officia impedit, illum nisi
                        alias velit ipsa nesciunt rerum eum voluptates quod! Rem
                        .{" "}
                      </p>
                    </div>
                  </div>

                  <div className="message">
                    <input
                      type="text"
                      className="message"
                      placeholder="Votre message ici ..."
                    />
                    <button>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row search">
                  <input type="text" name="search" placeholder="Search.." />
                </div>
                <div className="row discussion">
                  <ul className="list-group">
                    {listDiscussion.map((discussion, index) => (
                      <li key={index}>
                        <div className="row conv">
                          <div className="col-md-1 c-1">
                            <img src={marie} alt="Avatar" className="avatar" />
                          </div>
                          <div className="col-md-8 c-2">
                            <h6>
                              {" "}
                              {discussion.user1.id === userId
                                ? discussion.user2.firstName
                                : discussion.user1.firstName} {" "}
                               {discussion.user1.id === userId
                                ? discussion.user2.lastName
                                : discussion.user1.lastName}
                            </h6>
                            <p></p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Discussion;
