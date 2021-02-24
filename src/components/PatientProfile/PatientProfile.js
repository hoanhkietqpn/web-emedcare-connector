import {
  Grid,
  makeStyles,

  TextField
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useTranslation } from "../../i18n";
import MedicalHistoryTable from "../MedicalHistoryTable";
import Section from "../Section";

const useStyle = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

export default function PatientProfile(props) {
  const { t } = useTranslation();
  const classes = useStyle();
  const { patient, isLoading, isError } = props;

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Section title={t("Patient info")}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={2}>
              <img
                src="https://via.placeholder.com/150x200"
                alt="profile picture"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12} sm={9} md={10}>
              <TextField
                className={classes.textField}
                variant="outlined"
                fullWidth
                label={t("Patient code")}
                value={patient.hisCode}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                fullWidth
                label={t("Name")}
                value={patient.name}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                fullWidth
                label={t("Sex")}
                value={patient.sex ? t("Male") : t("Female")}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                fullWidth
                label={t("Phone number")}
                value={patient.phoneNumber}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                fullWidth
                label={t("Address")}
                value={patient.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Section>
      </Grid>
      <Grid item xs={12}>
        {/* <MedicalHistoryTable /> */}
      </Grid>
    </Grid>
  );
}

PatientProfile.propTypes = {
  patientProfile: PropTypes.object,
};
