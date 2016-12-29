class Contact < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname, captcha: true

  def headers
    {
      subject: "Great Chow Contact Form",
      # EDIT THIS TO UPDATE RECIPIENT
      # to: "klamgc18@live.com",
      to: "jscho13@gmail.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
