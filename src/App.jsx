

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [country, setCountry] = useState("")
  const [data, setData] = useState([])



  function handleAdd() {
    if(!name) return alert("Name is required");
    const temp = [...data, { name: name, email: email, contact: contact, country: country }]
    setData(temp)
    setName("");
    setEmail("");
    setContact("");
    setCountry("");

  }

  function hendleDelete(del_item, del_ind) {
    const del = data.filter(function (item, i) {
      return i !== del_ind
    })
    setData(del);
  }

  return (
    <>
      <div className="p-5 border m-5" onSubmit={handleAdd}>
        <h6 className="text-lg font-semibold">Edit address</h6>
        {/* <h1 className="text-center text-7xl">My Name is {name} </h1> */}
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-4 w-full pt-10">
          <div className="w-full md:w-[50%]">
            <h6 className="pb-4">  Name</h6>
            <input type="text" placeholder="JhoneDoe" className="w-full border p-4 rounded-md" onChange={function (e) { setName(e.target.value) }}
              value={name}
              requrid

            />
          </div>
          <div className="w-full md:w-[50%]">
            <h6 className="pb-4">Email</h6>
            <input type="text" placeholder="Enter your email" className="border w-full p-4 rounded-md" onChange={function (e) { setEmail(e.target.value) }} value={email} />
          </div>
        </div>
        {/* <div>
          <h6 className="py-5">Billing adress</h6>
          <textarea name="" id="" placeholder="address" className="w-full border h-[8rem] rounded-md p-4"></textarea>
        </div> */}
        <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap w-full">
          <div className="w-full md:w-[50%]">
            <h6 className="py-4">Contact</h6>
            <input type="number" placeholder="Enter your phone number" className="border w-full p-4 rounded-md" onChange={function (e) { setContact(e.target.value) }} value={contact} />
          </div>
          <div className="w-full md:w-[50%]">
            <h6 className="py-4">Country</h6>
            <input type="text" placeholder="England" className="border w-full p-4 rounded-md" onChange={function (e) { setCountry(e.target.value) }} value={country} /></div>
        </div>
        {/* <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap w-full">
          <div className="w-full md:w-[50%]">
            <h6 className="py-4">Zip code</h6>
            <input type="text" placeholder="0000" className="border rounded-md p-4 w-full" />
          </div>
          <div className="w-full md:w-[50%]">
            <h6 className="py-4">Vat Number</h6>
            <input type="text" placeholder="0000" className="border rounded-md p-4 w-full" />
          </div>
        </div> */}
        <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap w-full pt-4">
          {/* <button className="w-full md:w-[50%] border rounded-md py-5 font-medium border-black">Cancel</button> */}
          <button className="w-full md:w-[50%] border rounded-md py-5 bg-purple-700 text-white
          "type="submit" onClick={handleAdd}
          >Submit</button>
        </div>
      </div>
      <div className="flex w-full text-center">
        <div className="w-[20%] border">Name</div>
        <div className="w-[20%] border">email</div>
        <div className="w-[20%] border">Contact</div>
        <div className="w-[20%] border">Country</div>
        <button className="w-[20%] border">x</button>
      </div>
      {data.map((item, i) => (
        <div className="flex w-full text-center" key={i}>
          <div className="w-[20%] border">{item.name}</div>
          <div className="w-[20%] border">{item.email}</div>
          <div className="w-[20%] border">{item.contact}</div>
          <div className="w-[20%] border">{item.country}</div>
          <button className="w-[20%] border bg-red-500 text-white p-3" onClick={function () { hendleDelete(item, i) }}>X</button>
        </div>
      ))}
    </>
  )
}
export default App;
