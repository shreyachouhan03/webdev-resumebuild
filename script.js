function updatePreview() {
    const templateSelect = document.getElementById('templateSelect');
    const selectedTemplate = templateSelect.options[templateSelect.selectedIndex].value;
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('workExperience').value;
    const skills = document.getElementById('skills').value;
    
    let previewContent;
    
    if (selectedTemplate === 'template1') {
        previewContent = `
            <h3>${fullName}</h3>
            <p>Email: ${email}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Work Experience</h4>
            <p>${workExperience}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        `;
    } else if (selectedTemplate === 'template2') {
        previewContent = `
            <h1>${fullName}</h1>
            <p>Email: ${email}</p>
            <h2>Education</h2>
            <p>${education}</p>
            <h2>Work Experience</h2>
            <p>${workExperience}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
        `;
    }
    
    document.getElementById('previewContent').innerHTML = previewContent;
}

function downloadResume(format) {
    const templateSelect = document.getElementById('templateSelect');
    const selectedTemplate = templateSelect.options[templateSelect.selectedIndex].value;
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('workExperience').value;
    const skills = document.getElementById('skills').value;
    
    let resumeContent;
    
    if (selectedTemplate === 'template1') {
        resumeContent = `
            ${fullName}
            Email: ${email}
            
            Education
            ${education}
            
            Work Experience
            ${workExperience}
            
            Skills
            ${skills}
        `;
    } else if (selectedTemplate === 'template2') {
        resumeContent = `
            ${fullName}
            Email: ${email}
            
            Education
            ${education}
            
            Work Experience
            ${workExperience}
            
            Skills
            ${skills}
        `;
    }
    
    if (format === 'pdf') {
        alert('PDF generation not implemented in this example.');
    } else if (format === 'word') {
        alert('Word document generation not implemented in this example.');
    }
}
function downloadResume() {
    const previewContent = document.getElementById('previewContent').innerText;
    const blob = new Blob([previewContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

document.getElementById('templateSelect').addEventListener('change', updatePreview);
document.getElementById('resumeForm').addEventListener('input', updatePreview);
