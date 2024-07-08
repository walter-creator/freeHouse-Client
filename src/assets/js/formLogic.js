export const showTab = (n) => {
  const x = document.getElementsByClassName("tab");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[n].style.display = "block";
  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n === (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
};

export const nextPrev = (n, currentTab, setCurrentTab, formValues, validity, setValidity) => {
  const x = document.getElementsByClassName("tab");
  if (n === 1 && !validateForm(currentTab, formValues, validity, setValidity)) return false;
  const newTab = currentTab + n;
  setCurrentTab(newTab);
  if (newTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(newTab);
};

export const handleInputChange = (e, formValues, setFormValues) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const validateForm = (currentTab, formValues, validity, setValidity) => {
  const x = document.getElementsByClassName("tab");
  const y = x[currentTab].getElementsByTagName("input");
  let valid = true;
  for (let i = 0; i < y.length; i++) {
    if (y[i].value === "") {
      y[i].className += " invalid";
      valid = false;
    } else {
      y[i].className = y[i].className.replace(" invalid", "");
    }
  }
  const newValidity = [...validity];
  newValidity[currentTab] = valid;
  setValidity(newValidity);
  return valid;
};

const fixStepIndicator = (n) => {
  const x = document.getElementsByClassName("step");
  for (let i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
};
