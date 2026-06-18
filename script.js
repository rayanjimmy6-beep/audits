function generateReport(){

let score = 0;

score += Number(document.getElementById("mfa").value);
score += Number(document.getElementById("password").value);
score += Number(document.getElementById("rotation").value);
score += Number(document.getElementById("lockout").value);
score += Number(document.getElementById("sso").value);

let level = "";
let recommendations = "";

if(score >= 80){

level = "LOW RISK";

recommendations = `
<ul>
<li>MFA is configured properly.</li>
<li>Password policy is strong.</li>
<li>Continue regular security reviews.</li>
</ul>
`;

}
else if(score >= 50){

level = "MEDIUM RISK";

recommendations = `
<ul>
<li>Enable MFA for all users.</li>
<li>Strengthen password requirements.</li>
<li>Review account lockout settings.</li>
</ul>
`;

}
else{

level = "HIGH RISK";

recommendations = `
<ul>
<li>Immediately enable MFA.</li>
<li>Implement strong password policies.</li>
<li>Enable account lockout protection.</li>
<li>Deploy SSO where possible.</li>
</ul>
`;

}

document.getElementById("report").innerHTML = `
<p class="score">Score: ${score}/100</p>
<h3>${level}</h3>
<h4>Recommendations</h4>
${recommendations}
`;

}
