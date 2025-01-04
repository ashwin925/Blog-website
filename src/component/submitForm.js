'use server'

export async function submitForm(formData) {
  // Simulate form submission delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Mock form submission
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Form submitted:', { name, email, message });

  return { success: true, message: 'Message sent successfully!' };
}

