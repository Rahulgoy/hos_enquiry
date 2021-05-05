import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@material-ui/core";
import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";

const speciality_choices = [
  { title: "Cardiologist" },
  { title: "Skin Specialist" },
  { title: "Dentist" },
  { title: "ENT" },
  { title: "Gynaecologist" },
  { title: "Paediatrician" },
  { title: "General physician" },
  { title: "Radiologist" },
  { title: "Ophthalmalogist" },
  { title: "Oncologist" },
  { title: "Neurologist" },
  { title: "Orthopadics" },
];

const EditDoctorProfile = ({ pid }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    education: "",
    description: "",
    speciality: [],
  });
  const [speciality, setSpeciality] = useState([]);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handlespeciality = (e) => {
    console.log(e.target.value);
    setSpeciality([e.target.value]);
  };

  const handleSubmit = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fd = new FormData();
    fd.append("name", details.name);
    fd.append("eduaction", details.education);
    fd.append("description", details.description);
    fd.append("speciality", details.speciality);
    fd.append("_method", "PATCH");
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/doctor/profile/${pid}/`,
        fd,
        config
      );

      setTimeout("window.location.reload();", 2000);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleopen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };
  // console.log(details);
  // console.log(speciality);
  return (
    <>
      <Tooltip title="Edit details" placement="top">
        <IconButton onClick={handleopen}>
          <EditIcon color="secondary" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>Edit your details</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="name"
              type="text"
              label="name"
              placeholder="Name"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="education"
              type="text"
              label="education"
              placeholder="Education"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="description"
              type="text"
              label="description"
              placeholder="Description"
              onChange={handleChange}
              fullWidth
            />
            <Autocomplete
              multiple
              id="tags-standard"
              name="speciality"
              onChange={handlespeciality}
              options={speciality_choices}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Specialities"
                  placeholder=""
                />
              )}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDoctorProfile;