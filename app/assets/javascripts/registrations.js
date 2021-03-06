$(document).ready(function() {
	$('#new_user').validate({
		errorElement: 'span',
		errorClass: 'span-block error-color',
		focusInvalid: false,
		onclick: false,
		onkeyup: false,
		rules : {
			'user[email]': {
			  required: true,
			  email: true
			},
			'user[password]': {
			  required: true,
			  minlength: 8
			},
			'user[password_confirmation]': {
			  required: true,
			  equalTo: '#user_password',
			}
		},
		messages: {
			'user[email]': {
			  required: 'Este campo no puede ir vacío',
			  email: 'Ingrese un correo electrónico válido'
			},
			'user[password]': {
			  required: 'Este campo no puede ir vacío',
			  minlength: 'La contraseña debe tener mínimo 8 caracteres'
			},
			'user[password_confirmation]': {
			  required: 'Este campo no puede ir vacío',
			  equalTo: 'Las contraseñas no coinciden'

			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function (e) {
			$(e).closest('.form-group').removeClass('has-error').addClass('has-success');
			$(e).remove();
		},  
	});
});