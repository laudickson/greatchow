class ContactsController < ApplicationController
  def index
    @contact = Contact.new
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = "Thank you for your message. We'll get back to you soon!"
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
  
  # Cause fuck hackers
  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
