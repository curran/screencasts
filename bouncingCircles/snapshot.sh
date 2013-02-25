#!/bin/sh

# A shell script to create snapshots (copies) of the 
# working directory as it changes over time.
#
# Note: Any files that contain the word "snapshot" 
# will not be included in snapshots.
#
# Curran Kelleher 2/25/13

# Create the snapshots directory if it does not exist
if [ ! -d "snapshots" ]
then
  mkdir snapshots
fi

# If previos snapshots exist,
if [ -d "snapshots/snapshot01" ]
then
  # then use them to derive the next snapshot number:
  
  # Get the snapshot name with the highest number
  PREV_SNAP_NAME=`ls snapshots | grep snapshot | tail -n 1`
  
  # Extract the number substring using sed
  PREV_SNAP_NUMBER=`echo $PREV_SNAP_NAME | sed -e 's/snapshot//g'`
  
  # Parse and increment the number
  NEXT_SNAP_NUMBER=`echo $PREV_SNAP_NUMBER | awk '{print $1 + 1}'`
  
  # Format the number with a leading zero if needed
  NEXT_SNAP_NUMBER=`printf "%02d" $NEXT_SNAP_NUMBER`
  
  # Construct the next snapshot directory name
  NEXT_SNAP_NAME="snapshot"$NEXT_SNAP_NUMBER
else
  # otherwise create the first snapshot directory.
  NEXT_SNAP_NAME="snapshot01"
fi

# Make the next snapshot directory
mkdir snapshots/$NEXT_SNAP_NAME

# For each file that is not a snapshot directory 
# or this snapshot script,
for f in `ls | grep -v snapshot`
do
  # copy it into the next snapshot directory.
  cp $f snapshots/$NEXT_SNAP_NAME
done

echo "Created snapshots/"$NEXT_SNAP_NAME
