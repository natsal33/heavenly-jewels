import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLoaderData } from "react-router-dom";
import { NavigationBar } from "../../Components/NavigationBar";
import { dogApiArguments } from "../../Functions/dogApiArguments.js";
import { dogApiCallback } from "../../Functions/dogApiCallback.js";
import ReactModal from "react-modal";
import CONTENTS from "../../dummyData.js";

/* Importing commandbar package */
import { init } from "commandbar";

// Initializing commandbar and setting variables for commandbar functions
init("abc6a26d");
const loggedInUserId = "";

// Booting commandbar, setting argument choices and callback function for API Playground Action
window.CommandBar.boot(loggedInUserId);

// Adding records for listings
window.CommandBar.addComponent("record-preview-with-image", "Suit Preview", {
  mount: (elem) => ({
    render: (data, metadata) => {
      elem.innerHTML =
        "<div>" +
        "<h3>" +
        data.name +
        "</h3><h5>" + data.price + "</h5>" +
        '<div><img src="' +
        data.img +
        '" /></div>' +
        "</div>";
    },
    unmount: (elem) => {
      console.log(elem);
    },
  }),
});

window.CommandBar.addRecords("suits", CONTENTS, {
  detail: { type: "component", value: "record-preview-with-image" }, labelKey: "name", searchTabEnabled: true
}, );

window.CommandBar.addRecordAction('suits', {
  text: 'View Suits',
  name: 'open_suits',
  template: {
    type: 'link',
    value: '/listing/{{record.id}}',
    operation: 'self'
}, 
})

export async function loader() {
  const fetchedBreeds = await dogApiArguments();
  window.CommandBar.addArgumentChoices("breeds", fetchedBreeds);
  console.log("INSIDE FUNCTION", fetchedBreeds);
  return null;
}

function Root() {
  const [showModal, updateShowModal] = useState(false);
  const [dogPhoto, updateDogPhoto] = useState(
    "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2335.jpg"
  );
  const [dogBreed, updateDogBreed] = useState("");
  let navigate = useNavigate();

  const handleCloseModal = () => {
    updateShowModal(false);
  };

  const handleOpenModal = async (breed) => {
    console.log("UPDATED DOG:", dogPhoto);
    updateShowModal(true);
  };

  useEffect(() => {
    const routerFunc = (newUrl) => navigate(newUrl);
    window.CommandBar.addRouter(routerFunc);
    window.CommandBar.addCallback(
      "api-choice",
      // Async function awaits dogApiCallback fetch methods and sets retrieved url as modal pop up
      async (args, context) => {
        updateDogBreed(args.breeds);
        await updateDogPhoto(await dogApiCallback(args.breeds));
        console.log("DOG PHOTO", await dogPhoto);
        handleOpenModal();
        // alert(await dogApiCallback(args.breeds));
      }
    );
  }, []);

  return (
    <div className="bg-[#e2e8f0] min-h-screen flex-1 justify-items-center">
      <NavigationBar />
      <ReactModal
        isOpen={showModal}
        className=""
        onRequestClose={handleCloseModal}
      >
        <h3 className="mb-4 text-center"> Click outside to continue</h3>
        <h2 className="font-bold mb-6 text-center">You Picked a {dogBreed}!</h2>
        <div
          className={`bg-no-repeat bg-center bg-[length:500px] h-full w-full flex justify-center`}
        >
          <img src={dogPhoto} />
        </div>
      </ReactModal>
      <Outlet />
    </div>
  );
}

export default Root;
