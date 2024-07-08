import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DragAndDropFileUpload from '../components/DragAndDropFileUpload';
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/Slideshow.css";

const steps = ["type de logement","specification", 'identite du logement', 'Medias'];

function Publier() {
  //-----------------------------

   // cette partie est dedie a la gestion des choix
  const [selectedOption, setSelectedOption] = useState('');
  const [values, setValues] = useState({
    chambres: 1,
    cuisines: 0,
    salons: 0,
    sallesDeBain: 0
  });

  const handleOptionChange = (event) => {
    const choice = event.target.value;
    setSelectedOption(choice);

    // Set default values based on the choice
    if (choice === 'chambre') {
      setValues({ chambres: 1, cuisines: 0, salons: 0, sallesDeBain: 0 });
    } else if (choice === 'studio') {
      setValues({ chambres: 1, cuisines: 0, salons: 1, sallesDeBain: 0 });
    } else {
      setValues({ chambres: 0, cuisines: 0, salons: 0, sallesDeBain: 0 });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: Number(value)
    });
  };
  const handleFilesAdded = (newFiles) => {
    setFormData({
      ...formData,
      files: newFiles
    });
  }  

  const numberOptions = Array.from({ length: 7 }, (_, i) => i);

  // fin ------------------------
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: ''
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send formData to a server
    console.log('Form data submitted:', formData);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box component="form" noValidate autoComplete="off">
            <div class="row">
               <h5 className='m-2'> Quelle genre d'etablissemnt souhaitez vous mettre en ligne ?  </h5>
            <div class="col-md-6">
              <div class="float-end">
                <label class="choice float-end">
                   <input
                    type="radio"
                    name="accommodation-type"
                    value="chambre"
                    checked={selectedOption === 'chambre'}
                    onChange={handleOptionChange}
                  />
                  <div class="checkmark">
                    <div class="d-flex justify-content-center align-items-center m-4">
                      <i class="fa-solid fa-bed"  style={{fontSize: "70px", marginTop: "30px"}}></i>
                    </div>
                    <h5 class="m-2">Chambre</h5>
                  </div>
                </label>
              </div>
            </div>

            <div class="col-md-6">
              <label class="choice float-start">
                <input
                type="radio"
                name="accommodation-type"
                value="studio"
                checked={selectedOption === 'studio'}
                onChange={handleOptionChange}
              />
                <div class="checkmark">
                  <div class="d-flex justify-content-center align-items-center m-4">
                    <i class="fa fa-door-open" style={{fontSize: "70px", marginTop: "30px"}}></i>
                  </div>
                  <h5 class="m-2">Studio</h5>
                </div>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="float-end">
                <label class="choice float-end">
                  <input
                    type="radio"
                    value="appartement"
                    name="accommodation-type"
                    checked={selectedOption === 'appartement'}
                    onChange={handleOptionChange}
                  />
                  <div class="checkmark">
                    <div class="d-flex justify-content-center align-items-center m-4">
                      <i class="fa-solid fa-hotel" style={{fontSize: "70px", marginTop: "30px"}}></i>
                    </div>
                    <h5 class="m-2">Appartement</h5>
                  </div>
                </label>
              </div>
            </div>

            
          </div>
          </Box>
        );

        case 1:
        return (
          <Box component="form" noValidate autoComplete="off" className='mt-3'>
            {selectedOption === 'appartement' && (
          <div>
              
            <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Nombre de chambre</InputLabel>
              <Select
                name="nb_chambre"
                value={values.chambres} onChange={handleInputChange}>
                  <MenuItem> <em>none</em></MenuItem>
                  {numberOptions.map((option) => (
                    
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                onChange={handleChange}
              </Select>
            </FormControl>
            </div>
            <div> 
              <FormControl fullWidth margin="normal">
              <InputLabel>Nombre de cuisine</InputLabel>
              <Select
                name="nb_cuisine"
                value={values.cuisines} onChange={handleInputChange}>
                  <MenuItem> <em>none</em></MenuItem>
                  {numberOptions.map((option) => (
                    
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                onChange={handleChange}
              </Select>
              </FormControl>
              
            </div>
            <div>

            <FormControl fullWidth margin="normal">
              <InputLabel>Nombre de salons</InputLabel>
              <Select
                name="nb_salons"
                value={values.salons} onChange={handleInputChange}>
                  <MenuItem> <em>none</em></MenuItem>
                  {numberOptions.map((option) => (
                    
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                onChange={handleChange}
              </Select>
            </FormControl>
              
            </div>
            <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Nombre de salle de bain</InputLabel>
              <Select
                name="nb_sallesDeBain"
                value={values.sallesDeBain} onChange={handleInputChange}>
                  <MenuItem> <em>none</em></MenuItem>
                  {numberOptions.map((option) => (
                    
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                onChange={handleChange}
              </Select>
            </FormControl>
            </div>
          </div>
        )}

        {selectedOption === 'studio' && (
           <div>
           <div>
            <FormControl fullWidth margin="normal">
             <InputLabel>Nombre de cuisine</InputLabel>
             <Select
               name="nb_cuisine"
               value={values.cuisines} onChange={handleInputChange}>
               {numberOptions.map((option) => (
                 <option key={option} value={option}>{option}</option>
               ))}
               onChange={handleChange}
             
               <MenuItem value="">
                 <em>None</em>
               </MenuItem>
             </Select>
           </FormControl>
           </div>
           <div>
            <FormControl fullWidth margin="normal">
             <InputLabel>Nombre de salle de bain </InputLabel>
             <Select
               name="nb_sallesDeBain"
               value={values.sallesDeBain} onChange={handleInputChange}>
                 <MenuItem> <em>none</em></MenuItem>
                 {numberOptions.map((option) => (
                   
                   <MenuItem key={option} value={option}>{option}</MenuItem>
                 ))}
               onChange={handleChange}
             </Select>
            </FormControl>
           </div>
         </div>
        )}

        {selectedOption === 'chambre' && (
          <div>
            <div>
              <FormControl fullWidth margin="normal">
              <InputLabel>Nombre de cuisine</InputLabel>
              <Select
                name="nb_cuisine"
                value={values.cuisines} onChange={handleInputChange}>
                {numberOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
                onChange={handleChange}
              
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            </div>
            <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Nombre de salle de bain</InputLabel>
              <Select
                name="nb_sallesDeBain"
                value={values.sallesDeBain} onChange={handleInputChange}>
                  <MenuItem> <em>none</em></MenuItem>
                  {numberOptions.map((option) => (
                    
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                onChange={handleChange}
              </Select>
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
              placeholder=' Ex: cite tchofong'
              value={formData.titre}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="localisation"
              name="localisation"
              placeholder='ville - quartier'
              value={formData.localisation}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Standing</InputLabel>
              <Select
                name="standing"
                value={formData.category}
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
              placeholder='Decrivez ici en quelques mot votre logement, ses environs ses atouts et meme potentiellement son reglement '
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
            />
          </Box>
        );
      case 3:
        return (
            <div className="row mt-5">
              <h3>Inserer les photos de votre etablissement </h3>
                <DragAndDropFileUpload  onFilesAdded={handleFilesAdded} />
            </div>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <Sidebar a4="active" />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Nav titre="Publier" input="none" />
          <h3 className='m-3'>Mettez votre etablissement en ligne </h3>
        <div style={{ width: '50%', margin: 'auto' }}>
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
                  onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
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


{/* <form>
        {selectedOption === 'appartement' && (
          <div>
            <div>
              <label>
                Nombre de chambres:
                <select name="chambres" value={values.chambres} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Nombre de cuisines:
                <select name="cuisines" value={values.cuisines} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Nombre de salons:
                <select name="salons" value={values.salons} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Nombre de salles de bain:
                <select name="sallesDeBain" value={values.sallesDeBain} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        )}

        {selectedOption === 'studio' && (
          <div>
            <div>
              <label>
                Nombre de cuisines:
                <select name="cuisines" value={values.cuisines} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Nombre de salles de bain:
                <select name="sallesDeBain" value={values.sallesDeBain} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        )}

        {selectedOption === 'chambre' && (
          <div>
            <div>
              <label>
                Nombre de cuisines:
                <select name="cuisines" value={values.cuisines} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Nombre de salles de bain:
                <select name="sallesDeBain" value={values.sallesDeBain} onChange={handleInputChange}>
                  {numberOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        )}

        <div>
          <button type="submit">Soumettre</button>
        </div>
</form> */}


