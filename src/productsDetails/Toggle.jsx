import React, { useState } from "react";

export default function ToggleContent() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="p-4 ms-20 w-300 ">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 rounded ${
            activeTab === "description" ? " text-black-800" : "text-grey-100"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("rating")}
          className={`px-4 py-2 rounded ${
            activeTab === "description" ? " text-black-800" : "text-grey-100"
          }`}
        >
          Reviews (2)
        </button>
      </div>

      {/* Toggle Content */}
      <div className=" p-4  ">
        {activeTab === "description" ? (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id, quibusdam eum veniam reiciendis eligendi minima cumque eos, dolorum modi at, consequatur ipsum dolore sint doloremque consectetur in numquam ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio asperiores repellat modi, iste exercitationem nam sequi earum saepe voluptas tenetur ratione pariatur unde, sint quam cupiditate possimus optio. Illo, quos</p>
        ) : (
            <>
            <div>
          <p>Jhon Doe</p>
          <p className="text-orange-400">4.8 (rating)</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="mt-9">
          <p>Jhon Doe</p>
          <p className="text-orange-400">4.9 (rating)</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          </>
        )}
      </div>
    </div>
  );
}