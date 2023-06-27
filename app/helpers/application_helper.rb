module ApplicationHelper
  def config_tag
    authentication = Current.authentication

    javascript_tag(<<~JS)
      AUTHENTICATION = #{JSON.generate(authentication ? { id: authentication.id } : nil)};
      FULLSTORY_ORG_ID = "#{Rails.application.credentials.fullstory_org_id}";
      SENTRY_DSN = "#{Rails.application.credentials.sentry_dsn}";
    JS
  end
end
