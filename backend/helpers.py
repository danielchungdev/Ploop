import haversine as hs 
from haversine import Unit

def find_distance(loc1, loc2):
  return hs.haversine(loc1, loc2, unit=Unit.METERS)
