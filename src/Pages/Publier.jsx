import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Input,
} from "@mui/material";
import DragAndDropFileUpload from "../components/DragAndDropFileUpload";
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/Slideshow.css";
import { saveLogement } from "../api";

const steps = [
  "type de logement",
  "specification",
  "identite du logement",
  "Medias",
];

function Publier() {
  //-----------------------------

  // cette partie est dedie a la gestion des choix
  const [selectedOption, setSelectedOption] = useState("");
  const [values, setValues] = useState({
    chambre: 0,
    cuisine: 0,
    salon: 0,
    douche: 0,
  });
  const [formData, setFormData] = useState({
    genre: "",
    titre: "",
    description: "",
    standing: "",
    prix: 0,
    localisation: "",
    userId: 1,
    ...values,
  });

  const handleOptionChange = (event) => {
    const choice = event.target.value;
    setSelectedOption(choice);

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFilesAdded = (newFiles) => {
    setFormData({ ...formData, medias: [...formData.medias, ...newFiles.path] });
  };

  // const numberOptions = Array.from({ length: 7 }, (_, i) => i);

  // fin ------------------------
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    await saveLogement({...values});
    window.location.href = "/profile";
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box component="form" noValidate autoComplete="off">
            <div className="row">
              <h5 className="m-2">
                {" "}
                Quelle genre detablissemnt souhaitez vous mettre en ligne ?{" "}
              </h5>
              <div className="col-md-6">
                <div className="float-end">
                  <label className="choice float-end">
                    <input
                      type="radio"
                      name="genre"
                      value="chambre"
                      checked={selectedOption === "chambre"}
                      onChange={handleOptionChange}
                    />
                    <div className="checkmark">
                      <div className="d-flex justify-content-center align-items-center m-4">
                        <i
                          className="fa-solid fa-bed"
                          style={{ fontSize: "70px", marginTop: "30px" }}
                        ></i>
                      </div>
                      <h5 className="m-2">Chambre</h5>
                    </div>
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <label className="choice float-start">
                  <input
                    type="radio"
                    name="genre"
                    value="studio"
                    checked={selectedOption === "studio"}
                    onChange={handleOptionChange}
                  />
                  <div className="checkmark">
                    <div className="d-flex justify-content-center align-items-center m-4">
                      <i
                        className="fa fa-door-open"
                        style={{ fontSize: "70px", marginTop: "30px" }}
                      ></i>
                    </div>
                    <h5 className="m-2">Studio</h5>
                  </div>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="float-end">
                  <label className="choice float-end">
                    <input
                      type="radio"
                      value="appartement"
                      name="genre"
                      checked={selectedOption === "appartement"}
                      onChange={handleOptionChange}
                    />
                    <div className="checkmark">
                      <div className="d-flex justify-content-center align-items-center m-4">
                        <i
                          className="fa-solid fa-hotel"
                          style={{ fontSize: "70px", marginTop: "30px" }}
                        ></i>
                      </div>
                      <h5 className="m-2">Appartement</h5>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </Box>
        );

      case 1:
        return (
          <Box component="form" noValidate autoComplete="off" className="mt-3">
            {selectedOption === "appartement" && (
              <div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de chambre</InputLabel>
                    <Input
                      type="number"
                      name="chambre"
                      value={values.chambre}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de cuisine</InputLabel>
                    <Input
                      type="number"
                      name="cuisine"
                      value={values.cuisine}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salons</InputLabel>
                    <Input
                      type="number"
                      name="salon"
                      value={values.salon}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salle de bain</InputLabel>
                    <Input
                      type="number"
                      name="douche"
                      value={values.douche}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
              </div>
            )}

            {selectedOption === "studio" && (
              <div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de cuisine</InputLabel>
                    <Input
                      type="number"
                      name="cuisine"
                      value={values.cuisine}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salle de bain </InputLabel>
                    <Input
                      type="number"
                      name="douche"
                      value={values.douche}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
              </div>
            )}

            {selectedOption === "chambre" && (
              <div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de cuisine</InputLabel>
                    <Input
                      type="number"
                      name="cuisine"
                      value={values.cuisine}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salle de bain</InputLabel>
                    <Input
                      type="number"
                      name="douche"
                      value={values.douche}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
              </div>
            )}
          </Box>
        );
      case 2:
        return (
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              margin="normal"
              label="titre"
              name="titre"
              placeholder=" Ex: cite tchofong"
              value={values.titre}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="localisation"
              name="localisation"
              placeholder="ville - quartier"
              value={values.localisation}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Standing</InputLabel>
              <Select
                name="standing"
                value={values.standing}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Simple">Simple</MenuItem>
                <MenuItem value="Moderne">Moderne</MenuItem>
                <MenuItem value="Ultra-Moderne">Ultra-Moderne</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              placeholder="Decrivez ici en quelques mot votre logement, ses environs ses atouts et meme potentiellement son reglement "
              multiline
              rows={4}
              value={values.description}
              onChange={handleChange}
            />
          </Box>
        );
      case 3:
        return (
          <div className="row mt-5">
            <h3>Inserer les photos de votre etablissement </h3>
            <DragAndDropFileUpload onFilesAdded={handleFilesAdded} />
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      <Sidebar a5="active" />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Nav titre="Publier" input="none" />
        <h3 className="m-3">Mettez votre etablissement en ligne </h3>
        <div style={{ width: "50%", margin: "auto" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Typography variant="h5" gutterBottom>
              Thank you for submitting the form!
            </Typography>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type={activeStep === steps.length - 1 ? "submit" : "button"}
                  onClick={
                    activeStep === steps.length - 1 ? handleSubmit : handleNext
                  }
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Publier;
