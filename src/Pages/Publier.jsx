import { useEffect, useState } from "react";
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
  const [user, setUser] = useState({});
  const [logement, setLogement] = useState({
    genre: "",
    titre: "",
    description: "",
    salon: 0,
    cuisine: 0,
    chambre: 0,
    douche: 0,
    localisation: "",
    prix: 0,
    userId: '',
    mediaLinks: [],
  });
  useEffect(() => {
    const getUserId = async () => {
      const user = localStorage.getItem("user");
      setUser(JSON.parse(user));
      const id = JSON.parse(user).id;
      setLogement({ ...logement, userId: id });
    };
    getUserId();
  }, []);

  const handleOptionChange = (event) => {
    const choice = event.target.value;
    setSelectedOption(choice);
    //set genre of logement with choice
    setLogement({ ...logement, genre: choice });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogement({ ...logement, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(logement);
    console.log(user);
    const savedLogement = await saveLogement(logement);
    console.log(savedLogement);
    window.location.href = "/";
  };
  //file upload

  const handleFilesAdded = (newFiles) => {
    const name = newFiles.map((file) => file.name);
    const imageUrl = `../src/assets/images/${name}`;
    const linkList = logement.mediaLinks.push(imageUrl);
    setLogement({ ...logement, mediaLinks: [...logement.mediaLinks, ...linkList] });
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
                      value="Chambre"
                      checked={selectedOption === "Chambre"}
                      onChange={handleOptionChange}
                    />
                    {/* <input type="hidden" value={logement.userId} name="userId" onChange={handleChange} /> */}
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
                    value="Studio"
                    checked={selectedOption === "Studio"}
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
                      value="Appartement"
                      name="genre"
                      checked={selectedOption === "Appartement"}
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
            {selectedOption === "Appartement" && (
              <div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de chambre</InputLabel>
                    <Input
                      type="number"
                      name="chambre"
                      value={logement.chambre}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de cuisine</InputLabel>
                    <Input
                      type="number"
                      name="cuisine"
                      value={logement.cuisine}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salons</InputLabel>
                    <Input
                      type="number"
                      name="salon"
                      value={logement.salon}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salle de bain</InputLabel>
                    <Input
                      type="number"
                      name="douche"
                      value={logement.douche}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
              </div>
            )}

            {selectedOption === "Studio" && (
              <div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de cuisine</InputLabel>
                    <Input
                      type="number"
                      name="cuisine"
                      value={logement.cuisine}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salle de bain </InputLabel>
                    <Input
                      type="number"
                      name="douche"
                      value={logement.douche}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
              </div>
            )}

            {selectedOption === "Chambre" && (
              <div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de cuisine</InputLabel>
                    <Input
                      type="number"
                      name="cuisine"
                      value={logement.cuisine}
                      onChange={handleChange}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Nombre de salle de bain</InputLabel>
                    <Input
                      type="number"
                      name="douche"
                      value={logement.douche}
                      onChange={handleChange}
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
              value={logement.titre}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="localisation"
              name="localisation"
              placeholder="ville - quartier"
              value={logement.localisation}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Standing</InputLabel>
              <Select
                name="standing"
                value={logement.standing}
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
              label="Prix"
              name="prix"
              placeholder="Prix / mois"
              value={logement.prix}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              placeholder="Decrivez ici en quelques mot votre logement, ses environs ses atouts et meme potentiellement son reglement "
              multiline
              rows={4}
              value={logement.description}
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
              <form action="" method="post" onSubmit={handleSubmit}>
                {getStepContent(activeStep)}
                <Box display="flex" justifyContent="space-between" mt={2}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type={activeStep === steps.length ? "submit" : "button"}
                  onClick={
                    activeStep === steps.length - 1 ? handleSubmit : handleNext
                  }
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
              </form>
              
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Publier;
