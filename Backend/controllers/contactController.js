const Contact = require("../models/Contact")
const asyncHandler = require("express-async-handler")
// @desc Get all contacts
// @route Get /api/contacts
// @access public




const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

// @desc Create all contacts
// @route POST /api/contacts
// @access public

const createContacts = asyncHandler(
     async (req,res) => {


    const { name, email, phone , designation } = req.body
    if(!name || !email || !phone || !designation){
        res.status(400)
        throw new Error(" All fields are required")
    }
    console.log(req.body);
    const contact = await Contact.create({
        name, email, phone,designation
    })
    res.status(201).json(contact)
    
    
}
) 

// @desc Get contact
// @route POST /api/contacts/:id
// @access public

 const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact)
})

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }

    const updatedContact = await Contact.deleteOne({ _id:req.params.id })
    res.status(200).json(updatedContact)
})

module.exports = { getContacts, createContacts ,getContact ,updateContact,deleteContact}