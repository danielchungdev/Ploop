import haversine as hs 
from haversine import Unit
from database import (
  get_bathrooms
)

def find_distance(loc1, loc2):
  return hs.haversine(loc1, loc2, unit=Unit.METERS)

def find_closest_bathrooms(location):
  bathrooms = get_bathrooms()
  
