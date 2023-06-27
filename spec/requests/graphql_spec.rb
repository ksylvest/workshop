require "rails_helper"

RSpec.describe "Graphql" do
  describe "POST /graphql" do
    it "executes" do
      post "/graphql", params: { query: "query Test { now }", variables: {} }
      expect(response).to have_http_status(:ok)
    end
  end
end
