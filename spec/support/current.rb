RSpec.configure do |config|
  config.around do |example|
    Current.ip = "0.0.0.0"
    example.run
  ensure
    Current.reset
  end
end
