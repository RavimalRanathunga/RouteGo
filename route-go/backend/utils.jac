import from byllm.llm {Model}
glob llm = Model(model_name="gemini/gemini-2.0-flash");

obj City_details{
    has start_city: str;
    has end_city: str;
}

sem City_details.start_city = "Analyze the user input to find the starting city of the bus route. If the starting city is not provided, leave it empty.";

sem City_details.end_city = "Analyze the user input to find the ending city of the bus route. If the ending city is not provided, leave it empty.";

"""
Extracts starting and ending city information from user input text.

This function uses an LLM to parse natural language input and identify
the departure and destination cities for a bus route. It returns a
City_details object containing the extracted city names.

Args:
    user_input (str): Natural language text containing route information

Returns:
    City_details: Object with start_city and end_city fields. Fields will
                 be empty strings if cities are not found in the input.

Example:
    >>> extract_city_details("I want to go from Colombo to Kandy")
    City_details(start_city="Colombo", end_city="Kandy")
"""
def extract_city_details(user_input: str) -> City_details  by llm();