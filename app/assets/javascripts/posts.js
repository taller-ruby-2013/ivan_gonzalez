$(document).ready(function() {
  	$('[data-toggle="tooltip"]').tooltip();   

  	//validación formularios
    $('#new_post').validate({
      errorElement: 'span',
      errorClass: 'span-block error-color',
      focusInvalid: false,
      onclick: false,
      onkeyup: false,
      rules : {
        'post[title]': {
          required: true,
          minlength: 5
        },
        'post[text]': {
          required: true,
        }
      },
      messages: {
        'post[title]': {
          required: 'Este campo no puede ir vacío',
          minlength: 'Mínimo de cinco caracteres para el título'
        },
        'post[text]': {
          required: 'Este campo no puede ir vacío',
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

  	$('[id^="edit"]').validate({
  		errorElement: 'span',
  		errorClass: 'span-block error-color',
  		focusInvalid: false,
  		onclick: false,
  		onkeyup: false,
  		rules : {
  			'post[title]': {
  				required: true,
  			},
  			'post[text]': {
  				required: true,
  			}
  		},
  		messages: {
  			'post[title]': {
  				required: 'Este campo no puede ir vacío'
  			},
  			'post[text]': {
  				required: 'Este campo no puede ir vacío',
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

    $('form.new_comment').validate({
      errorElement: 'span',
        errorClass: 'span-block error-color',
        focusInvalid: false,
        onclick: false,
        onkeyup: false,
        rules : {
          'comment[commenter]': {
            required: true,
          },
          'comment[body]': {
            required: true,
          }
        },
        messages: {
          'comment[commenter]': {
            required: 'Este campo no puede ir vacío'
          },
          'comment[body]': {
            required: 'Este campo no puede ir vacío',
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