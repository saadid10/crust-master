 
 


var firstname=document.getElementById('first-name');
var lastname=document.getElementById('last-name');
var email=document.getElementById('email');
var phone=document.getElementById('phone-number');
var mot_passe=document.getElementById('password');
var Confirm_mot_passe=document.getElementById('confirm-password');
var check=document.getElementById("submit");
var j=0;

var users=[];
var position;
function firstnameValidation(){
    let ch=firstname.value;
    if(ch==''){
        document.getElementById('firsname-error').style.display="inline";
        return false;
    }
    for(let i=0;i<ch.length;i++){
        if(! (ch[i]>= "a" && ch[i]<= "z" || ch[i]>= "A" && ch[i]<= "Z"||ch[i]==" ")){
            document.getElementById('firstname-error').style.display="inline";
            return false;
        }
    }
    return true;
}

function lastnameValidation(){
  let ch=lastname.value;
  if(ch==''){
      document.getElementById('lastname-error').style.display="inline";
      return false;
  }
  for(let i=0;i<ch.length;i++){
      if(! (ch[i]>= "a" && ch[i]<= "z" || ch[i]>= "A" && ch[i]<= "Z"||ch[i]==" ")){
          document.getElementById('lastname-error').style.display="inline";
          return false;
      }
  }
  return true;
}
function emailValidation(){
    let E=email.value;
    if(E.includes('@',1)&&E.includes('.com',5)){
        return true;
    }else{
        document.getElementById('email-error').style.display="inline";
        return false;
    }
}

function phoneValidation(){
    let A=Number(phone.value);
    if(A>0 && A<11){
        return true;
    }else{
        document.getElementById('phone-error').style.display="inline";
        return false;
    }
}

function passwordValidation(){
    let P=mot_passe.value;
    if(P.length>=8){
        return true;
    }else{
        document.getElementById('password-error').style.display="inline";
        return false;
    }
}

function ConfirmPassword(){
    let C=mot_passe.value;
    let P=Confirm_mot_passe.value;
    if(P===C){
        return true;
    }else{
        document.getElementById('Confirm-password-error').style.display="inline";
        return false;
    }
}
function chekbox(){
    if(check.checked){
        return true;
    }else{
        document.getElementById('check-box').style.display="inline";
        return false;
    }
}

function Validtion(){
    var errors=document.getElementsByClassName('error');
    for(let i=0;i<errors.length;i++){
        errors[i].style.display='none';
    }
    
    if(nameValidation()&&emailValidation()&&ageValidation()&&passwordValidation()&&ConfirmPassword()&&chekbox()){
        
        var user= {
            first_name:'',
            last_name:'',
            Email:'',
            number:'',
            password:'',
            ConfirmPassword:''
        };
        user.first_namename=firstnamenom.value;
        user.last_name=lastname.value;
        user.Age=age.value;
        user.Email=email.value;
        user.number=phone.value;
        user.password=mot_passe.value;
        user.ConfirmPassword=Confirm_mot_passe.value;
        users.push(user);
        alert("Confirmed! You are in!");
        console.log(users);
    
        if(confirm("sign Up again?")==true){
            return false;
        }else{
            document.getElementById('sign up').style.display="none";
            document.getElementById('sign in').style.display="inline";
            return true;
        } 
    }else{
        return false;
    }
  }