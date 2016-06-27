class Contact < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname, captcha: true

  def headers
    {
      subject: "Great Chow Contact Form",
      to: "klamgc18@live.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
