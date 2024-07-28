import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const ForMe = () => {
    const label={inputProps:{"arial-label": "Checkbox demo"}}
  return (
    <>
      <h1>For me work</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <div>
        <Button variant="outlined" style={{padding:"30px",margin:"30px"}}>Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>
      <Checkbox {...label} defaultChecked />
<Checkbox {...label}disabled />
<Checkbox {...label} disabled/>
<Checkbox {...label} disabled checked/>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
    </>
  );
};
export default ForMe;
