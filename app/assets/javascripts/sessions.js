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
			  email: true,
			},
			'user[password]': {
			  required: true,
			}
		},	
		messages: {
			'user[email]': {
			  required: 'Este campo no puede ir vacío',
			  email: 'Ingrese un email válido'
			},
			'user[password]': {
			  required: 'Este campo no puede ir vacío',
			}
		},
		highlight: function(element) {
			$(element).closest('.form-control').removeClass('has-success').addClass('has-error');
		},
		success: function (e) {
			$(e).closest('.form-control').removeClass('has-error').addClass('has-success');
			$(e).remove();
		}, 
	}); 
});