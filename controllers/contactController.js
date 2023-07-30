//@desc Get all contacts
//@route GET /api/contacts
//@acces public 

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
  };

  //@desc Create new contacts
//@route POST /api/contacts
//@acces public 

const createContact = (req, res) => {
    res.status(201).json({ message: "Create Contact" });
  };

  //@desc Get contact 
//@route GET /api/contacts/:id
//@acces public 

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  };

  //@desc Update contact
//@route PUT /api/contacts/:id
//@acces public 

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
  };

  //@desc Delete contact
//@route DELETE /api/contacts/:id
//@acces public 

const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` });
  }

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};