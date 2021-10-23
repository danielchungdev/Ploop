import haversine as hs 
from haversine import Unit

def find_distance(loc1, loc2):
  return hs.haversine(loc1, loc2, unit=Unit.METERS)

# Gender Types
MALE = 0
FEMALE = 1
OTHER = 2

# Dry Method
PAPERTOWEL = 0
AIRDRY = 1
NONE = 2
