window.SHANKAR_PROFILE_IMAGE = 'assets/images/profile.jpg';

document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.innerHTML = '<img class="profile-photo" src="' + window.SHANKAR_PROFILE_IMAGE + '" alt="Shankar Bandi">';
  }

  const style = document.createElement('style');
  style.textContent = `
    .avatar{width:190px;height:250px;overflow:hidden;border-radius:22px;background:#162940;margin-bottom:20px;box-shadow:0 18px 45px rgba(0,0,0,.28);}
    .profile-photo{width:100%;height:100%;display:block;object-fit:cover;object-position:center 34%;}
    .profile{position:relative;overflow:hidden;}
    .profile:before{content:"";position:absolute;width:180px;height:180px;right:-70px;top:-70px;border-radius:50%;background:rgba(110,231,249,.10);filter:blur(2px);}
    .profile h2{letter-spacing:-1px;}
    .btn{transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;}
    .btn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(0,0,0,.18);}
    .project{transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;}
    .project:hover{transform:translateY(-4px);border-color:#35516e;box-shadow:0 18px 40px rgba(0,0,0,.16);}
    @media(max-width:520px){.avatar{width:150px;height:200px;}}
  `;
  document.head.appendChild(style);
});
