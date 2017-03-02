import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


class ResumeComp extends Component {

  render() {
    const styles  = {
        paper: {
            minWidth: '300px',
            maxWidth: '700px',
            width: '90%',
            margin: '30px auto',
            padding: '20px',
            fontSize: '90%'
        },
        section: {
            main: {
                paddingLeft: '10px'
            },
            heading: {
                fontWeight: 'bold',
                marginTop: '40px'
            },
            subheadingConatiner: {
                display: 'flex',
                justifyContent: 'space-between'
            },
            subheading: {
                fontWeight: 'bold',
                margin: '10px 0 0 0',
            },
            content: {
                
            },
            contentItem: {
                marginTop: '7px',
                marginBottom: '7px'
            }

        },
        top: {
            main: {
                textAlign: 'center',
                fontSize: '90%',
                lineHeight: '50%'
            },
            name: {
                fontSize: '120%',
                fontWeight: 'bold'
            }
        },
        projects: {
            padding: '5px 10px'
        }
    };

    const d = this.props.data;

    const education = d.education.map((e, i) => {
        return (
            <div style={styles.section.main} key={i}>
                <div style={styles.section.subheadingConatiner}>
                    <p style={styles.section.subheading}>
                        {e.program}
                    </p>
                    <p style={styles.section.subheading}>
                        {e.timeline}
                    </p>
                </div>
                <p style={styles.section.content}>
                    {e.qualifiaction}
                </p>
                <p style={styles.section.content}>
                    {e.institute}
                </p>
            </div>
        )
    });

    const experience = d.experience.map((e, i) => {
        return (
            <div style={styles.section.main} key={i}>
                <div style={styles.section.subheadingConatiner}>
                    <p style={styles.section.subheading}>
                        {e.position}
                    </p>
                    <p style={styles.section.subheading}>
                        {e.timeline}
                    </p>
                </div>
                <p style={styles.section.content}>
                    {e.institute}
                </p>
                <div style={styles.section.content}>
                    {e.description.map((d, i) => {
                        return(<p style={styles.section.contentItem} key={i}>{d}</p>)
                    })}
                </div>
            </div>
        )
    });

    const projects = d.projects.map((e, i) => {
       return (
         <div key={i} style={styles.projects}>
            {e.text}
         </div>
       )
    });

    return (
    <Paper style={styles.paper} zDepth={2}>

        <div style={styles.top.main}>
            <p style={styles.top.name}>
                {d.name}
            </p>
            <p>{d.addressLine1}</p>
            <p>{d.addressLine2}</p>
            <p>{d.city}</p>
            <p>{d.pinCode}</p>
            <p>{d.phone}</p>
            <p>{d.email}</p>
            <p>{d.website}</p>
        </div>

        <p style={styles.section.heading}>
            Objective
        </p>
        <hr />
        <p>{d.objective}</p>

        <p style={styles.section.heading}>
            Projects
        </p>
        <hr />
            {projects}

        <p style={styles.section.heading}>
            Education
        </p>
        <hr />
            {education}

        <p style={styles.section.heading}>
            Experience
        </p>
        <hr />
            {experience}
    </Paper>
    );
  }

}

export default ResumeComp;